/** @type {import('next').NextConfig} */


const nextTranslate = require('next-translate');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withVideos = require('next-videos')


module.exports = 
  withVideos(),
  nextConfig


