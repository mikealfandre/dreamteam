let players = [
    {
        firstName: "Alex",
        lastName: "Abrines",
        country: "Spain",
        position: "SG",
        team: "OKC",
        id: "1"
    },
    {
        firstName: "James",
        lastName: "Harden",
        country: "USA",
        position: "SG",
        team: "Rockets",
        id: "2"
    },
    {
        firstName: "LeBron",
        lastName: "James",
        country: "USA",
        position: "G.O.A.T.",
        team: "Lakers",
        id: "3"
    },
    {
        firstName: "Ricky",
        lastName: "Rubio",
        country: "Spain",
        position: "PG",
        team: "Jazz",
        id: "4"
    },
    {
        firstName: "John",
        lastName: "Wall",
        country: "USA",
        position: "PG",
        team: "Wizards",
        id: "5"
    },
    {
        firstName: "Greek",
        lastName: "Freak",
        country: "Greece",
        position: "PF",
        team: "Bucks",
        id: "6"
    },
    {
        firstName: "Jake",
        lastName: "Layman",
        country: "USA",
        position: "SF",
        team: "Trail Blazers",
        id: "7"
    },
    {
        firstName: "Kevin",
        lastName: "Huerter",
        country: "USA",
        position: "SG",
        team: "Hawks",
        id: "8"
    },
    {
        firstName: "Manu",
        lastName: "Ginobli",
        country: "Argentina",
        position: "SG",
        team: "Spurs",
        id: "9"
    },
    {
        firstName: "Jimmer",
        lastName: "Freddette",
        country: "China",
        position: "PG",
        team: "Shanghai Sharks",
        id: "10"
    },

];


let teams = [




]

let teamID = 0;


module.exports = {

    readPlayers: (req, res) => {
        res.status(200).send(players)
    },
    readTeams: (req, res) => {
        res.status(200).send(teams)
    },
    
    saveTeam: (req, res) => { // (create)
            let {teamName, idOne, idTwo, idThree, idFour, idFive} = req.body
            
            const newTeam = {
                teamID: teamID,
                teamName: teamName,
                idOne: idOne,
                idTwo: idTwo,
                idThree: idThree,
                idFour: idFour,
                idFive: idFive
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



