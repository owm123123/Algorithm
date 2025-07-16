// * Design In-Memory File System
// The file system contains file directories as well as files. Now you need to design the directory class Directory and the file class File. Both the file class and the directory class need to be initialized by passing in specific names. In addition to that, the directory class needs to be designed with add() functions (addFile() and addSubDir() in Python) to add files or subdirectories.

// Finally, we will check if the directory is empty by using the empty() method of the file directory class, which you can see in the main function (or main.py in Python) to evaluate the code called.

// Input: createDir('dir1'); // create a directory with the name "dir1"
// dir1.empty(); // determine if dir1 is an empty directory
// createDir('dir2'); // create a directory with the name "dir2"
// dir1.add(dir2); // dir1 adds subdirectory dir2
// dir2.empty(); // determine if dir2 is an empty directory
// createDir('dir3'); // create a directory with the name "dir3"
// createFile('1.txt'); // create a file with the file name "1.txt"
// dir3.add('1.txt'); // dir3 adds the file "1.txt"
// dir1.add(dir3); // dir1 adds subdirectory dir3
// dir1.empty(); // determine if dir1 is an empty directory

// Output:
// true;
// true;
// false;

class FileNode {
  constructor(isFile = false) {
    this.isFile = isFile;
    this.children = new Map(); // name -> FileNode
    this.content = '';
  }
}

var FileSystem = function () {
  this.root = new FileNode();
};

FileSystem.prototype.ls = function (path) {
  let node = this.root;
  if (path !== '/') {
    let parts = path.split('/').filter(Boolean);
    for (let part of parts) {
      node = node.children.get(part);
    }
    if (node.isFile) return [parts[parts.length - 1]];
  }
  return Array.from(node.children.keys()).sort();
};

FileSystem.prototype.mkdir = function (path) {
  let node = this.root;
  let parts = path.split('/').filter(Boolean);
  for (let part of parts) {
    if (!node.children.has(part)) {
      node.children.set(part, new FileNode());
    }
    node = node.children.get(part);
  }
};

FileSystem.prototype.addContentToFile = function (filePath, content) {
  let node = this.root;
  let parts = filePath.split('/').filter(Boolean);
  for (let i = 0; i < parts.length; i++) {
    let part = parts[i];
    if (!node.children.has(part)) {
      node.children.set(part, new FileNode(i === parts.length - 1));
    }
    node = node.children.get(part);
  }
  node.isFile = true;
  node.content += content;
};

FileSystem.prototype.readContentFromFile = function (filePath) {
  let node = this.root;
  let parts = filePath.split('/').filter(Boolean);
  for (let part of parts) {
    node = node.children.get(part);
  }
  return node.content;
};
