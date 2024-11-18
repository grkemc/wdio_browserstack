import axios from 'axios';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import FormData from 'form-data'; 

dotenv.config();

const isAppUploadedRecently = async (custom_id: string): Promise<boolean> => {
    try {
        const response = await axios.get('https://api-cloud.browserstack.com/app-automate/recent_apps', {
            auth: {
                username: process.env.BROWSERSTACK_USER || "BROWSERSTACK_USER",
                password: process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY"
            }
        });

        const apps = response.data;
        const app = apps.find((app: any) => app.custom_id === custom_id);

        if (!app) {
            return false;
        }

        const uploadedDate = new Date(app.uploaded_at);
        const currentDate = new Date();
        const daysDifference = (currentDate.getTime() - uploadedDate.getTime()) / (1000 * 3600 * 24);

        return daysDifference <= 30;
    } catch (error) {
        console.error('Failed to check existing apps:', error.response ? error.response.data : error.message);
        return false;
    }
};

const uploadApp = async (platform: string, appFilePath: string, custom_id: string) => {
    try {
        const formData = new FormData();
        formData.append('file', fs.createReadStream(appFilePath), path.basename(appFilePath)); 
        formData.append('custom_id', custom_id);
        formData.append('ios_keychain_support', 'true');

        const response = await axios.post('https://api-cloud.browserstack.com/app-automate/upload', formData, {
            auth: {
                username: process.env.BROWSERSTACK_USER || "BROWSERSTACK_USER",
                password: process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY"
            },
            headers: {
                ...formData.getHeaders() 
            }
        });

        console.log('Response from BrowserStack:', response.data);

        const customId = response.data.custom_id;
        console.log(`${platform} app uploaded successfully:`, customId);

        updateEnvFile('BROWSERSTACK_APP_ID', customId);
    } catch (error) {
        console.error(`Failed to upload ${platform} app:`, error.response ? error.response.data : error.message);
    }
};

const updateEnvFile = (key: string, value: string) => {
    const envFilePath = path.join(process.cwd(), '.env');
    let envContent = fs.readFileSync(envFilePath, 'utf8');

    const regex = new RegExp(`^${key}=.*`, 'm');
    if (regex.test(envContent)) {
        envContent = envContent.replace(regex, `${key}=${value}`);
    } else {
        envContent += `\n${key}=${value}`;
    }

    fs.writeFileSync(envFilePath, envContent);
    console.log('.env file updated successfully.');
};

const runUploadProcess = async () => {
    const command = process.argv.join(' ');

    if (command.includes('wdio.ios.bs.app.conf.ts')) {
        const isUploaded = await isAppUploadedRecently('yelloIOS');
        if (!isUploaded) {
            await uploadApp('iOS', path.join(process.cwd(), "apps", "yello_automation.ipa"), 'yelloIOS');
        } else {
            console.log('iOS app already uploaded in the last 30 days.');
        }
    } else if (command.includes('wdio.android.bs.app.conf.ts')) {
        const isUploaded = await isAppUploadedRecently('yelloAndroid');
        if (!isUploaded) {
            await uploadApp('Android', path.join(process.cwd(), "apps", "yello_automation.apk"), 'yelloAndroid');
        } else {
            console.log('Android app already uploaded in the last 30 days.');
        }
    } else {
        console.log('Unsupported config file. Please use the correct WDIO config.');
    }
};

export { runUploadProcess };