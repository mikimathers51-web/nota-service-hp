const fs = require('fs');
const path = require('path');

// Path configuration
const srcDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// Build process
console.log('🚀 Starting build process...');

// Clean dist directory
if (fs.existsSync(distDir)) {
    console.log('🧹 Cleaning dist directory...');
    fs.rmSync(distDir, { recursive: true, force: true });
}

// Create dist directory
fs.mkdirSync(distDir, { recursive: true });

// Check if src exists
if (!fs.existsSync(srcDir)) {
    console.error('❌ ERROR: src/ directory tidak ditemukan!');
    console.log('📁 Buat folder src/ dan letakkan index.html, manifest.json, service-worker.js di dalamnya');
    process.exit(1);
}

// Copy all files from src/ to dist/
console.log('📂 Copying all files from src/ to dist/...');
copyDir(srcDir, distDir);

// Verify critical files
const criticalFiles = ['index.html', 'manifest.json', 'service-worker.js'];
let allGood = true;

for (const file of criticalFiles) {
    const filePath = path.join(distDir, file);
    if (fs.existsSync(filePath)) {
        console.log(`✅ ${file} found in dist/`);
    } else {
        console.error(`❌ ERROR: ${file} tidak ditemukan di src/ atau dist/`);
        allGood = false;
    }
}

if (!allGood) {
    console.log('');
    console.log('📁 Isi folder src/:');
    if (fs.existsSync(srcDir)) {
        const files = fs.readdirSync(srcDir);
        files.forEach(f => console.log(`   - ${f}`));
    } else {
        console.log('   (folder src/ kosong atau tidak ada)');
    }
    process.exit(1);
}

console.log('');
console.log('✅ Build complete! All files copied from src/ to dist/');
console.log(`📂 Output: ${distDir}`);
