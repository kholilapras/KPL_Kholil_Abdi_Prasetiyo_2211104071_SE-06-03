// main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto'); // Untuk hashing password

const usersFilePath = path.join(__dirname, 'users.json');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true, // Penting untuk keamanan
            enableRemoteModule: false, // Disarankan false untuk keamanan
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Fungsi untuk membaca data user
const readUsers = () => {
    if (fs.existsSync(usersFilePath)) {
        const data = fs.readFileSync(usersFilePath, 'utf8');
        return JSON.parse(data);
    }
    return [];
};

// Fungsi untuk menulis data user
const writeUsers = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf8');
};

// --- Implementasi Secure Coding Practices ---

// Password Hashing (SHA256) 
const hashPassword = (password) => {
    return crypto.createHash('sha256').update(password).digest('hex');
};

// Input Validation: Username dan Password
// Validasi Panjang Data (minimal 8, maksimal 20) 
// Validasi Range Data (hanya huruf alfabet ASCII) 
// Validasi Range Data (harus mengandung angka) 
// Validasi Password Rules (minimal 1 karakter unik, tidak boleh mengandung username) 
const validateRegistrationInput = (username, password) => {
    // Validasi Panjang Data 
    if (username.length < 3 || username.length > 20) {
        return { isValid: false, message: 'Username harus antara 3 sampai 20 karakter.' };
    }
    if (password.length < 8 || password.length > 20) {
        return { isValid: false, message: 'Password harus antara 8 sampai 20 karakter.' };
    }

    // Validasi Range Data (hanya huruf alfabet ASCII untuk username) 
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        return { isValid: false, message: 'Username hanya boleh mengandung huruf dan angka.' };
    }

    // Validasi Password Rules 
    // Harus mengandung angka 
    if (!/\d/.test(password)) {
        return { isValid: false, message: 'Password harus mengandung setidaknya satu angka.' };
    }
    // Harus mengandung minimal 1 karakter unik (!@#$%^&*) 
    if (!/[!@#$%^&*]/.test(password)) {
        return { isValid: false, message: 'Password harus mengandung setidaknya satu karakter unik (!@#$%^&*).' };
    }
    // Password tidak boleh mengandung kata dari username 
    if (password.toLowerCase().includes(username.toLowerCase())) {
        return { isValid: false, message: 'Password tidak boleh mengandung username.' };
    }

    return { isValid: true, message: 'Validasi berhasil.' };
};

// IPC Main Handler untuk Registrasi 
ipcMain.handle('register-user', (event, { username, password }) => {
    const validation = validateRegistrationInput(username, password);
    if (!validation.isValid) {
        return { success: false, message: validation.message }; // Handling data invalid 
    }

    let users = readUsers();
    // Cek apakah username sudah ada
    if (users.some(user => user.username === username)) {
        return { success: false, message: 'Username sudah terdaftar.' };
    }

    const hashedPassword = hashPassword(password); // Password hashing 
    users.push({ username, password: hashedPassword });
    writeUsers(users);
    return { success: true, message: 'Registrasi berhasil!' };
});

// IPC Main Handler untuk Login 
ipcMain.handle('login-user', (event, { username, password }) => {
    let users = readUsers();
    const hashedPassword = hashPassword(password); // Hash password input untuk perbandingan 

    const user = users.find(user => user.username === username && user.password === hashedPassword);

    if (user) {
        return { success: true, message: 'Login berhasil!' };
    } else {
        return { success: false, message: 'Username atau password salah.' }; // Handling data invalid 
    }
});