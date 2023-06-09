import { API_ROOT } from '../constants';
import Request, { setMethod, setURL } from '../request';

/**
 * cancelObjectStorage
 *
 * Cancels Object Storage service
 */
export const cancelObjectStorage = () =>
  Request<{}>(setMethod('POST'), setURL(`${API_ROOT}/object-storage/cancel`));
