export const foundUrls = (text: string) => {
    var matchUrls = text.match(/\bhttps?::\/\/\S+/gi) || text.match(/\bhttps?:\/\/\S+/gi);
    return matchUrls;
}