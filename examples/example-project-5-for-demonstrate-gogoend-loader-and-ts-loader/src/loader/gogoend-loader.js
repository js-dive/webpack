module.exports = function (source, map, meta) {
	// console.log(this, source, map, meta);
	return `/* ======= gogoend-loader start ====== */
${source}
/* ======= gogoend-loader end ====== */
`;
};
