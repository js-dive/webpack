import * as Module5 from "./module-5.gogoend"

enum Gender {
	MALE,
	FEMALE
}

interface Person {
	name: string
	gender: Gender
}

export const personFactory = (name: string): Person => {
	Module5.sayHello(name)
	return {
		name,
		gender: Math.random() > 0.5 ? Gender.FEMALE : Gender.MALE
	}
}
