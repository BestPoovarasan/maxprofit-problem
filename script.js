const testcase1 = {
    timeunit: 7,
    earnings: 3000
}
const testcase2 = {
    timeunit: 8,
    earnings: 4500
}
const testcase3 = {
    timeunit: 13,
    earnings: 16500
}

const establishmentunits = [5, 4, 10]
const earningsperunits = [1500, 1000, 3000]

function maxprofit(requirement) {
    let result = []
    const land = [
        { name: 'Theatre', earnings: 1500, developTime: 5 },
        { name: 'Pub', earnings: 1000, developTime: 4 },
        { name: 'Commercial Park', earnings: 3000, developTime: 10 }
    ]

    for (let i = 0; i < land.length; i++) {
        let bussiness = land[i]
        if (requirement.timeunit < bussiness.developTime) {
            continue
        } else {
            let noOfBussiness = parseInt(requirement.timeunit / bussiness.developTime)
            let totalBussinessRunningTime = 0
            let totalTimeSpentInDevelopment = 0
            
            for (let i = 1; i <= noOfBussiness; i++) {
                let bussinessRunningTime = (requirement.timeunit - totalTimeSpentInDevelopment) - bussiness.developTime
                totalBussinessRunningTime += bussinessRunningTime
                totalTimeSpentInDevelopment += bussiness.developTime
            }

            let totalEarningFromBussiness = totalBussinessRunningTime * bussiness.earnings
            if (totalEarningFromBussiness == requirement.earnings) {
                let solution = { 'Theatre': 0, 'Pub': 0, 'Commercial Park': 0 }
                solution[bussiness.name] = noOfBussiness
                result.push(solution)
            }
        }
    }
    console.log(result)
    return result
}

maxprofit(testcase1)
maxprofit(testcase2)
maxprofit(testcase3)