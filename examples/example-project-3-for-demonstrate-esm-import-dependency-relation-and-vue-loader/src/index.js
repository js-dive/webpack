import { logGogoend, module_3 } from './modules/module-2'

import logHello from './modules/module-1'
import snapshotImg from './assets/image-1.png'
import examplePackageJson from './assets/json-1.json'

import * as VueShared from '@vue/shared'

export const someNumber = 9999

logHello()
logGogoend()
console.log(examplePackageJson, snapshotImg, module_3, VueShared)

import('./modules/module-5.vue')
