const input = `
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
`

const reports = input.trim().split("\n")

const safeReports = reports.reduce((count, report) => {
	const levels = report
		.trim()
		.split(" ")
		.map((l) => Number(l))

	let safe = true

	for (let index = 0; index < levels.length - 1; index++) {
		const [prev, curr, next] = [levels[index - 1], levels[index], levels[index + 1]]

		const diff = Math.abs(curr - next)

		// const trend =

		if (diff >= 1 && diff <= 3) continue

		safe = false

		console.log({ curr, next, diff, safe })

		break
	}

	if (safe) count += 1

	return count
}, 0)

console.log({ safeReports })
