import * as yup from 'yup'

export const schemaLogin = yup.object().shape({
    login:yup.string().required('Required field').min(4).max(12),
    password:yup.string().required('Required field').min(4).max(16),
})