export default (parkCode) => {
  const images = {
    acad: 'http://www.meteoweb.eu/wp-content/uploads/2014/09/ACADIA-COP.jpg',
    arch: 'https://static1.squarespace.com/static/564d14dfe4b0290681184a82/t/59063ff32e69cf367cedd706/1493581819904/59in52_banner_arches.jpg?format=1500w',
    badl: 'https://www.nps.gov/common/uploads/banner_image/mwr/homepage/491D568A-1DD8-B71B-0B8DC6D83B0CDA51.jpg',
    bibe: 'https://www.imagesfromtexas.com/images/xl/Chisos-Mountains-November-Morning-Panorama-1.jpg',
    bisc: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/18e8312083bc163f400271a74164096e-biscayne-national-park.jpg?sharp=10&vib=20&w=1200',
    blca: 'https://www.visitmontrose.com/ImageRepository/Document?documentID=898',
    brca: 'https://www.williamhortonphotography.com/wp-content/uploads/2017/07/Bryce-2016-06.jpg',
    cany: 'http://discovermoab.com/wp-content/uploads/2017/06/canyonlands_main_image.jpg',
    care: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Capitol_Reef_National_Park.jpg',
    cave: '',
    chis: 'https://www.nps.gov/common/uploads/banner_image/pwr/homepage/8B1831DF-1DD8-B71B-0BF9865C590EE5A5.jpg',
    cong: 'https://www.nationalparks.org/sites/default/files/styles/large_list_image_2x/public/Tree_stumps_%287166121696%29.jpg?itok=scMulCj1&timestamp=1474984872',
    crla: 'https://static1.squarespace.com/static/564d14dfe4b0290681184a82/t/57ce2c16d482e9784e53ed8b/1473129497268/59in52_banner_crater-lake.jpg?format=1500w',
    cuva: 'https://cl9r93gnrb42o3l0v1aawby1-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/Cuyahoga_Valley-Main.png',
    deva: 'https://www.nationalparks.org/sites/default/files/styles/wide_1x/public/death-valley-istock-2.jpg?itok=wkDp4Q-b',
    drto: 'https://keywestseaplanecharters.com/img/slide-05.jpg',
    ever: 'http://crowntrailsheadwear.com/wp-content/uploads/2017/10/everglades.jpg',
    jeff: 'https://wikitravel.org/upload/shared//9/9b/St._Louis_Banner.jpg',
    glac: 'https://cdn.cnn.com/cnnnext/dam/assets/170217160203-09-most-popular-national-parks-2016-restricted-super-169.jpg',
    grca: 'https://www.smartertravel.com/uploads/2017/08/Grand-Canyon-%E2%80%93-hero-1400x500.jpg',
    grte: 'https://www.travelwyoming.com/sites/default/files/styles/7_4_large/public/1.4-Grand-Teton-1_forweb.jpg?itok=mksZrXhR',
    grba: '',
    grsm: 'http://tncabingetaways.com/images/foothillsBanner.jpg',
    gumo: '',
    hale: '',
    havo: '',
    hosp: '',
    isro: '',
    jotr: '',
    kefj: '',
    kova: '',
    lavo: '',
    maca: '',
    meve: '',
    mora: '',
    noca: '',
    olym: '',
    pefo: '',
    pinn: 'https://www.nationalparks.org/sites/default/files/styles/wide_2x/public/pinnacles_ste_gregorygnesio.jpg?itok=xDafn8FC&timestamp=1484324243',
    romo: '',
    sagu: '',
    shen: '',
    thro: '',
    viis: '',
    voya: '',
    wica: '',
    yell: 'https://npca.s3.amazonaws.com/images/8729/4487ccbb-e4b7-4f16-b54e-9aa0e289a64f-banner.jpg?1445970456',
    yose: 'https://viewfinder.expedia.com/wp-content/uploads/2016/06/0_PAN2011E-1230x356.jpg',
    zion: 'https://www.rockymtnrefl.com/ZionCanyonOverlookcd472067227.jpg'
  };
  return !images[parkCode] ? '' : images[parkCode];
};