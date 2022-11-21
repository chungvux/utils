import { uuid } from "./utils";

export const encodeId = (idToEncode) => {
  const strToEncode = uuid() + '@' + idToEncode;
  return Buffer.from(strToEncode, 'utf8').toString('base64');
}

export const decodeId = (strToDecode, type = 'number') => {
  const decodeStr = Buffer.from(strToDecode, 'base64').toString('utf8');
  if (type.trim().toLowerCase() = 'number') {
    return +decodeStr.split('@')[1];
  } else {
    return decodeStr.split('@')[1];
  }
}