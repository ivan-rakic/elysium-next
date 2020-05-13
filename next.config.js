const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withVideos = require('next-videos');



// da bi sass radio sa images, mora ovako da se wrapuju jedan u drugi

module.exports = withSass(withImages(withVideos(withFonts({
  exportPathMap: function () {

    return {
      '/': { page: '/' },
      '/guide': { page: '/guide' },
      '/our-story': { page: '/our-story' },
      '/how-to': { page: '/how-to' },
      '/faq': { page: '/faq' },
      '/participate': { page: '/participate' },
      '/temple': { page: '/temple' },
      '/cinema-and-theater': { page: '/cinema-and-theater' },
      '/larva': { page: '/larva' },
      '/healing-area': { page: '/healing-area' },
      '/workshops': { page: '/workshop' },
      '/lectures': { page: '/lectures' },
      '/healing-program': { page: '/healingProgram' },
      '/art-gallery': { page: '/art-gallery' },
      '/contact': { page: '/contact' },
      '/gallery': { page: '/gallery' },
      '/news': { page: '/news' },
      '/news1': { page: '/news1' },
      '/news2': { page: '/news2' },
      '/news3': { page: '/news3' },
      '/news4': { page: '/news4' },
      '/news5': { page: '/news5' },
      '/program': { page: '/program' },
      '/ray-of-hope': { page: '/ray-of-hope' },
      '/tickets': { page: '/tickets' },
      '/2016': { page: '/2016' },
      '/2017': { page: '/2017' },
      '/2018': { page: '/2018' },
      '/2019': { page: '/2019' }
    }
  },
}))))