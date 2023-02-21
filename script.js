// TODO: add code here

window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    response.json().then(function(json){
        console.log(json)
        for(let i = 0; i<json.length;i++){
            let obj = json[i]
            // console.log(`JSON[i] ${obj[i]}`)
            let divElementH3 = document.createElement('h3')
            let divElementH3Text = document.createTextNode(obj.firstName)
            let ulElementTime = document.createElement('li')
            let liElementTextTime = document.createTextNode(`Hours in space: ${obj.hoursInSpace}`)
            let ulElementActive = document.createElement('li')
            let ulElementActiveText = document.createTextNode(`Active: ${obj.active}`)
            let ulElementSkills = document.createElement('li')
            let ulElementSkillsText = document.createTextNode(`Skills: ${obj.skills}`)
            let imgAstronaut = document.createElement('img')
            imgAstronaut.src = obj.picture
            let ulActual = document.createElement('ul')
            let divMain = document.createElement('div')
            let divBig = document.createElement('div')
            document.body.append(divBig)
            divBig.setAttribute('class', 'astronaut')
            divBig.append(divMain)
            
            
            // document.body.append(divMain)
            // divMain.append(obj.firstName, divElementH3)
            divBig.append(imgAstronaut)
            // ulActual.append(imgAstronaut)
            divMain.append(divElementH3)
            divElementH3.append(divElementH3Text)
            divMain.append(ulActual)
            ulActual.append(ulElementTime)
            ulElementTime.append(liElementTextTime)
            ulActual.append(ulElementActive)
            ulElementActive.append(ulElementActiveText)
            ulActual.append(ulElementSkills)
            ulElementSkills.append(ulElementSkillsText)
            
            

            // ulActual.append(`Active: ${obj.active}`, ulElementActive)
            // ulActual.append(`Skills: ${obj.skills}`, ulElementSkills)
            divMain.setAttribute('class', 'bio')
            
            
            




            // divElementH3.appendChild(divElementH3Text)
            // document.body.appendChild(divElementH3)
            // document.body.appendChild(ulElementTime)
            // ulElementTime.appendChild(liElementTextTime)
            // ulElementActive.appendChild(ulElementActiveText)
            // document.body.appendChild(ulElementActive)
            // ulElementSkills.appendChild(ulElementSkillsText)
            // document.body.appendChild(ulElementSkills)
            // document.body.appendChild(imgAstronaut)
            imgAstronaut.setAttribute('class', 'avatar')



            // let div1 = document.getElementById('container')
            // div1.setAttribute('class', 'astronaut')
            
            // return obj.firstName
        }
        
    });
    
});
});
