// require modules
var fs = require('fs')
var archiver = require('archiver')
var config = require('./jszip.json')

const artifactArchiveName = config.archiveName
const artifactFileList = config.archiveFileList
const artifactDirectoryList = config.archiveDirectoryList

var output = fs.createWriteStream(__dirname + '/' + artifactArchiveName)
var archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
})

output.on('close', function () {
  console.log(artifactArchiveName + ' successfully created and is ' + archive.pointer() + ' total bytes')
})

archive.on('warning', function (err) {
  if (err.code === 'ENOENT') {
    // log warning
  } else {
    // throw error
    throw err
  }
})

archive.on('error', function (err) {
  throw err
})

// pipe archive data to the file
archive.pipe(output)

// append a file
for (var i = 0; i < artifactFileList.length; i++) {
  archive.file(artifactFileList[i])
}

for (var i = 0; i < artifactDirectoryList.length; i++) {
  archive.directory(artifactDirectoryList[i], true)
}

archive.finalize()
