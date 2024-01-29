console.log(process.argv);
/*
skt@skt:~/mit208/NODEJS$ node a.js
[ '/usr/bin/node', '/home/skt/mit208/NODEJS/a.js' ]
skt@skt:~/mit208/NODEJS$ node a.js sdfks sdfas
[ '/usr/bin/node', '/home/skt/mit208/NODEJS/a.js', 'sdfks', 'sdfas' ]
*/
for(let i=2; i<process.argv.length;i++)
{
console.log("names:=="+process.argv[i]);
}

