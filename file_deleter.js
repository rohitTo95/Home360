const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the file extension (e.g., .txt, .css, .html): ', (extension) => {
  rl.question('Enter the path of the directory to search for files: ', (directoryPath) => {
    // Validate the directory path
    if (!fs.existsSync(directoryPath) || !fs.lstatSync(directoryPath).isDirectory()) {
      console.log('Invalid directory path!');
      rl.close();
      return;
    }

    // List all files in the directory
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.log('Error reading directory:', err);
        rl.close();
        return;
      }

      // Filter files with the specified extension
      const filesToDelete = files.filter(file => path.extname(file) === extension);

      if (filesToDelete.length === 0) {
        console.log(`No files found with extension ${extension} in the directory.`);
        rl.close();
        return;
      }

      console.log(`Found ${filesToDelete.length} file(s) with extension ${extension}:`);
      filesToDelete.forEach((file, index) => {
        console.log(`${index + 1}. ${file}`);
      });

      rl.question('Enter the number of the file you want to delete or "all" to delete all files: ', (fileNumber) => {
        if (fileNumber.toLowerCase() === 'all') {
          deleteAllFiles(filesToDelete, directoryPath);
        } else {
          const fileIndex = parseInt(fileNumber) - 1;
          if (isNaN(fileIndex) || fileIndex < 0 || fileIndex >= filesToDelete.length) {
            console.log('Invalid file number!');
            rl.close();
            return;
          }

          const fileToDelete = path.join(directoryPath, filesToDelete[fileIndex]);
          // Delete the selected file
          fs.unlink(fileToDelete, (err) => {
            if (err) {
              console.log('Error deleting file:', err);
            } else {
              console.log(`File "${filesToDelete[fileIndex]}" deleted successfully.`);
            }
            rl.close();
          });
        }
      });
    });
  });
});

function deleteAllFiles(filesToDelete, directoryPath) {
  console.log(`Deleting ${filesToDelete.length} file(s)`);
  filesToDelete.forEach((file) => {
    const fileToDelete = path.join(directoryPath, file);
    fs.unlink(fileToDelete, (err) => {
      if (err) {
        console.log('Error deleting file:', err);
      } else {
        console.log(`File "${file}" deleted successfully.`);
      }
    });
  });
  rl.close();
}

rl.on('close', () => {
  console.log('Program exited.');
});
