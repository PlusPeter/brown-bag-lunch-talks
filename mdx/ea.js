export const ea = () => {
    const origEnd = ["a"]
    const cities = ["b", "c", "d", "e"]
    const path = origEnd.concat(cities).concat(origEnd)
    const dists = {
        "a": [ 0, 10, 15, 20, 30 ],
        "b": [ 10, 0, 35, 25, 20 ],
        "c": [ 15, 35, 0, 30, 25 ],
        "d": [ 20, 25, 30, 0, 30 ],
        "e": [ 30, 20, 25, 30, 0 ],
    }

    const calcDist = (path) => {
        return path.map((p, i) => {
            let next = 0
            if (i < path.length-2) {
                next = i+1
            }
            return dists[p][next]
        }).reduce((p, n) => {
            return p + n
        })
    }


    const genome = (list) => {
        list.sort(() => Math.random() - 0.5)
        return [...list]
    }

    const species = (size) => {
        const sp = new Set()
        while (sp.size < size) {
            const g = genome(cities)
            sp.add(g.join(''))
        }
        return sp
    }

    const fitness = (sp) => {
        return [...sp].map((s) => {
            return { "genome": s, "distance": calcDist(s.split('')) }
        }).sort((a, b) => {
            return a.distance - b.distance
        })
    }

    const offspring = (parent) => {
        const a = parent.split('')
        const max = a.length
        const x = Math.floor(Math.random() * Math.floor(max))
        const y = x+1 <= max ? x+1 : 0
        a[x] = a.splice(y,1, a[x])[0]
        const ofs = a.join("")
        return ofs

    }

    const generations = (size, spTotal, survRate) => {
        let sp = species(spTotal)

        const logs = []
        for (let i=0; i<size; i++) {
            logs.push("generation " + i)
            const generation = fitness(sp)
            logs.push(generation.map((g) => {
                return `genome: ${g.genome}, fitness: ${g.distance}`
            }))
        
            const survivors = generation.slice(0, survRate)
                .map((a) => {
                    return a.genome
                })
            const ofs = offspring(survivors[0])
            logs.push(`new offspring ${ofs} from parent ${survivors[0]}`)
            const mutation = species(1)
            logs.push("new mutation " + [...mutation][0])

            const nextSpecies = mutation
            nextSpecies.add(ofs)
            survivors.forEach(nextSpecies.add, nextSpecies)
            sp = nextSpecies
        }

        return logs

    }

    return {
        path,
        calcDist,
        species,
        fitness,
        offspring,
        generations
    }
}