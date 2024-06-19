        const fs = require("fs")
        const text = fs.readFileSync('./data.json','utf-8');
        const jsonData = JSON.parse(text);
        console.log(jsonData);
        jsonData.map((item)=>{
            console.log(item.name);
        })