/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env:{
    'DB_HOST': '127.0.0.1',
    'DB_USER': 'root',
    'DB_PASSWORD': '123456',
    'DB_DATABASE': 'userstest',
    'DB_PORT': '3306'
  }
}
