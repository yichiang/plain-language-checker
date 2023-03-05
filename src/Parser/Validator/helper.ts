export const foundUrls = (text: string) => {
	const matchUrls = text.match(/\bhttps?::\/\/\S+/gi) || text.match(/\bhttps?:\/\/\S+/gi);
	return matchUrls;
};