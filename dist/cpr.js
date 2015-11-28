/*
This is meant to be a cross-platform utility script to copy files and directories from one
place to another.
arg1 = source
arg2 = destination
arg3 = glob pattern to filter on

see: https://github.com/jprichardson/node-fs-extra#copy
*/
//example usage; will copy all files EXCEPT .js or .md files into dist
//node cpr.js ../src ../dist '**/!(*.js|*.md)'

'use strict';

var fs = require('fs-extra');
var minimatch = require("minimatch");
var chalk = require('chalk');
var args = process.argv;
var showSeparator = function showSeparator() {
    console.log('----------------------');
};

showSeparator();
console.log(chalk.white.bgBlue.bold('Begin cpr.js:'));

var pattern = '**/**';
if (args[4]) {
    console.log(chalk.bold('glob pattern: ' + args[4]));
    pattern = args[4];
}
var matcher = function matchFunc(filename) {
    var match = minimatch(filename, pattern);
    var msg = (match ? 'COPY: ' : 'SKIP: ') + filename;
    console.log(match ? msg : chalk.yellow(msg));
    return match;
};

fs.copy(args[2], args[3], {
    filter: matcher,
    clobber: true,
    preserveTimestamps: false
}, function (err) {
    if (err) {
        console.error(err);
        console.log(chalk.red.bold('cpr.js: error'));
    } else {
        console.log(chalk.bold('cpr.js: success'));
    }

    console.log(chalk.white.bgBlue.bold('End cpr.js:'));
    showSeparator();
    return err ? err : 0;
}); // copies directory, even if it has subdirectories or files
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcHIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFZQSxJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDL0IsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQzFCLElBQU0sYUFBYSxHQUFHLFNBQWhCLGFBQWEsR0FBUztBQUN4QixXQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7Q0FDekMsQ0FBQzs7QUFFRixhQUFhLEVBQUUsQ0FBQztBQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDOztBQUV0RCxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUE7QUFDckIsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDVCxXQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRCxXQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0NBQ3BCO0FBQ0QsSUFBTSxPQUFPLEdBQUcsU0FBUyxTQUFTLENBQUMsUUFBUSxFQUFDO0FBQ3hDLFFBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDM0MsUUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsUUFBUSxHQUFHLFFBQVEsQ0FBQSxHQUFJLFFBQVEsQ0FBQztBQUNyRCxXQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzdDLFdBQU8sS0FBSyxDQUFDO0NBQ2hCLENBQUE7O0FBRUQsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ3RCLFVBQU0sRUFBRSxPQUFPO0FBQ2YsV0FBTyxFQUFFLElBQUk7QUFDYixzQkFBa0IsRUFBRSxLQUFLO0NBQzVCLEVBQUUsVUFBUyxHQUFHLEVBQUU7QUFDYixRQUFJLEdBQUcsRUFBRTtBQUNMLGVBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkIsZUFBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0tBQ2hELE1BQU07QUFDSCxlQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0tBQzlDOztBQUVELFdBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDcEQsaUJBQWEsRUFBRSxDQUFDO0FBQ2hCLFdBQVEsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUU7Q0FDMUIsQ0FBQyxDQUFDIiwiZmlsZSI6ImNwci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UaGlzIGlzIG1lYW50IHRvIGJlIGEgY3Jvc3MtcGxhdGZvcm0gdXRpbGl0eSBzY3JpcHQgdG8gY29weSBmaWxlcyBhbmQgZGlyZWN0b3JpZXMgZnJvbSBvbmVcbnBsYWNlIHRvIGFub3RoZXIuXG5hcmcxID0gc291cmNlXG5hcmcyID0gZGVzdGluYXRpb25cbmFyZzMgPSBnbG9iIHBhdHRlcm4gdG8gZmlsdGVyIG9uXG5cbnNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pwcmljaGFyZHNvbi9ub2RlLWZzLWV4dHJhI2NvcHlcbiovXG4vL2V4YW1wbGUgdXNhZ2U7IHdpbGwgY29weSBhbGwgZmlsZXMgRVhDRVBUIC5qcyBvciAubWQgZmlsZXMgaW50byBkaXN0XG4vL25vZGUgY3ByLmpzIC4uL3NyYyAuLi9kaXN0ICcqKi8hKCouanN8Ki5tZCknXG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMtZXh0cmEnKTtcbmNvbnN0IG1pbmltYXRjaCA9IHJlcXVpcmUoXCJtaW5pbWF0Y2hcIik7XG5jb25zdCBjaGFsayA9IHJlcXVpcmUoJ2NoYWxrJyk7XG5jb25zdCBhcmdzID0gcHJvY2Vzcy5hcmd2O1xuY29uc3Qgc2hvd1NlcGFyYXRvciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xufTtcblxuc2hvd1NlcGFyYXRvcigpO1xuY29uc29sZS5sb2coY2hhbGsud2hpdGUuYmdCbHVlLmJvbGQoJ0JlZ2luIGNwci5qczonKSk7XG5cbmxldCBwYXR0ZXJuID0gJyoqLyoqJ1xuaWYgKGFyZ3NbNF0pIHtcbiAgICBjb25zb2xlLmxvZyhjaGFsay5ib2xkKCdnbG9iIHBhdHRlcm46ICcgKyBhcmdzWzRdKSk7XG4gICAgcGF0dGVybiA9IGFyZ3NbNF1cbn1cbmNvbnN0IG1hdGNoZXIgPSBmdW5jdGlvbiBtYXRjaEZ1bmMoZmlsZW5hbWUpe1xuICAgIGNvbnN0IG1hdGNoID0gbWluaW1hdGNoKGZpbGVuYW1lLCBwYXR0ZXJuKTtcbiAgICBjb25zdCBtc2cgPSAobWF0Y2ggPyAnQ09QWTogJyA6ICdTS0lQOiAnKSArIGZpbGVuYW1lO1xuICAgIGNvbnNvbGUubG9nKG1hdGNoID8gbXNnIDogY2hhbGsueWVsbG93KG1zZykpO1xuICAgIHJldHVybiBtYXRjaDtcbn1cblxuZnMuY29weShhcmdzWzJdLCBhcmdzWzNdLCB7XG4gICAgZmlsdGVyOiBtYXRjaGVyLFxuICAgIGNsb2JiZXI6IHRydWUsXG4gICAgcHJlc2VydmVUaW1lc3RhbXBzOiBmYWxzZVxufSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLnJlZC5ib2xkKCdjcHIuanM6IGVycm9yJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLmJvbGQoJ2Nwci5qczogc3VjY2VzcycpKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhjaGFsay53aGl0ZS5iZ0JsdWUuYm9sZCgnRW5kIGNwci5qczonKSk7XG4gICAgc2hvd1NlcGFyYXRvcigpO1xuICAgIHJldHVybiAoZXJyID8gZXJyIDogMCk7XG59KTsgLy8gY29waWVzIGRpcmVjdG9yeSwgZXZlbiBpZiBpdCBoYXMgc3ViZGlyZWN0b3JpZXMgb3IgZmlsZXNcbiJdfQ==