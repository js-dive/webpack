/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Module")} Module */

/**
 * @param {Iterable<Module>} modules the modules
 * @param {Compilation} compilation the compilation
 * @returns {void}
 */
const assignAscendingModuleIds = (modules, compilation) => {
	const chunkGraph = compilation.chunkGraph;

	const usedIds = new Set();
	if (compilation.usedModuleIds) {
		for (const id of compilation.usedModuleIds) {
			usedIds.add(id);
		}
	}

	for (const module of modules) {
		const moduleId = chunkGraph.getModuleId(module);
		if (moduleId !== null) {
			usedIds.add(moduleId);
		}
	}

	let nextId = 0;
	if (usedIds.size > 0) {
		for (const module of modules) {
			if (chunkGraph.getModuleId(module) === null) {
				while (usedIds.has(nextId)) nextId++;
				chunkGraph.setModuleId(module, nextId++);
			}
		}
	} else {
		for (const module of modules) {
			if (chunkGraph.getModuleId(module) === null) {
				chunkGraph.setModuleId(module, nextId++);
			}
		}
	}
};

module.exports = assignAscendingModuleIds;