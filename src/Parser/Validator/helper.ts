export const foundUrls = (text: string) => {
	const matchUrls = text.match(/\bhttps?::\/\/\S+/gi) || text.match(/\bhttps?:\/\/\S+/gi);
	return matchUrls;
};

export const groupBy = function(array: any[], key: string) {
	return array.reduce((result, item) =>  {(result[item[key]] = result[item[key]] || []).push(item); return result;
	}, {});
};