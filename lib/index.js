import { merge } from 'ramda'
import client from './client'
import validate from './validations'
import postback from './postback'
import resources from './resources'

export const clientPagarme = client
export const validatePagarme = validate
export const postbackPagarme = postback

const pagarme = merge({
  client: clientPagarme,
  validate: validatePagarme,
  postback: postbackPagarme,
}, resources)

export default pagarme
