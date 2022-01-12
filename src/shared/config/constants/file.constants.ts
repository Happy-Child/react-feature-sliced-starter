import { BYTES_SIZES } from './general.constants';

export const MAX_SIZE_FOR_UPLOAD_FILE = BYTES_SIZES.MD * 2;

export enum FILE_EXTS {
  JPG = '.jpg',
  PNG = '.png',
}

export const ALLOWED_FILE_EXTS_TO_UPLOAD = [FILE_EXTS.PNG, FILE_EXTS.JPG];
