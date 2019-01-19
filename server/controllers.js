let players = [
    {
        firstName: "Alex",
        lastName: "Abrines",
        country: "Spain",
        id: "1"
    },
    {
        firstName: "Joe",
        lastName: "Abrines",
        country: "Spain",
        id: "2"
    },
    {
        firstName: "Carol",
        lastName: "Abrines",
        country: "Spain",
        id: "3"
    },
    {
        firstName: "Bill",
        lastName: "Abrines",
        country: "Spain",
        id: "4"
    },

];


let teams = [

{   
    teamID: 1,
    teamName: 'Jazz',
    idOne: 1,
    idTwo: 2,
    idThree: 3,
    idFive: 4,
    idSix: 5
},
{   
    teamID: 2,
    teamName: 'Cats',
    idOne: 1,
    idTwo: 2,
    idThree: 3,
    idFive: 4,
    idSix: 5
},
{   
    teamID: 3,
    teamName: 'Kings',
    idOne: 1,
    idTwo: 2,
    idThree: 3,
    idFive: 4,
    idSix: 5
},
{   
    teamID: 4,
    teamName: 'Dogs',
    idOne: 1,
    idTwo: 2,
    idThree: 3,
    idFive: 4,
    idSix: 5
},


]

let teamID = 5;


module.exports = {

    readPlayers: (req, res) => {
        res.status(200).send(players)
    },
    readTeams: (req, res) => {
        res.status(200).send(teams)
    },
    
    saveTeam: (req, res) => { // (create)
            let {teamName, id1, id2, id3, id4, id5} = req.body
            
            const newTeam = {
                teamID: teamID,
                teamName: req.body.teamName,
                idOne: id1,
                idTwo: id2,
                idThree: id3,
                idFour: id4,
                idFive: id5
            }
            
            teamID++
            teams.push(newTeam)
            
            
            res.status(200).send(teams)
        
    },

    deleteTeam: (req, res) => {
        let deleteID = req.params.id
        let deleteIndex = teams.findIndex((team) => team.teamID === +deleteID)
        teams.splice(deleteIndex, 1)
        console.log(teams)

        res.status(200).send(teams)

    }, 

    updateTeamName: (req, res) => {

        const {teamName} = req.body
        console.log('team name', teamName)
        const updateID = req.params.id
        console.log('update id', updateID)

        let teamIndex = teams.findIndex(team => team.teamID === +updateID)
        console.log('team index', teamIndex)
        
        let teamToUpdate = teams[teamIndex]

        teams[teamIndex] = {
            teamID: teamID,
            teamName: teamName,
            idOne: teamToUpdate.idOne,
            idTwo: teamToUpdate.idTwo,
            idThree: teamToUpdate.idThree,
            idFour: teamToUpdate.idFour,
            idFive: teamToUpdate.idFive
        }
       console.log('team at',teams[teamIndex] )
       res.status(200).send(teams)

        
        //// BETTER WAY TO UPDATE/PUT ////
        
        // updateBook: (req, res) => {
        //     const {id} = req.params;
        //     const {body} = req
        //     teams = teams.map((team) => {
        //       if(team.id === +id) {
        //         team.teamName = body.teamName;
        //         team.teamID = body.teamID;
        //       }
        //       return team
        //     })
        //     res.status(200).send(teams);
        //   },
    }

    
}



