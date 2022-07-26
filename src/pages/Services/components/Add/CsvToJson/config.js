export default {
  delimiter: "", // auto-detect
  newline: "", // auto-detect
  quoteChar: '"',
  escapeChar: '"',
  header: true,
  transformHeader: undefined,
  dynamicTyping: false,
  preview: 0,
  encoding: "",
  worker: false,
  comments: false,
  step: undefined,
  complete: undefined,
  error: (...rest)=>console.log(rest),
  download: false,
  downloadRequestHeaders: undefined,
  skipEmptyLines: true,
  chunk: undefined,
  fastMode: true ,
  beforeFirstChunk: undefined,
  withCredentials: undefined,
  transform: undefined,
//   delimitersToGuess: [",", "	", "|", ";", RECORD_SEP, UNIT_SEP],
}
