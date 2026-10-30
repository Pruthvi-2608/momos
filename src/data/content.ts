export type Photo = {id:string; alt:string; label:string; position?:string;sourceFile?:string;instagramUrl?:string};
const photoOrigins:Record<string,{sourceFile:string;instagramUrl:string}>={
 momos:{sourceFile:'food/post_11_DQPayD4jMSw_main.jpg',instagramUrl:'https://www.instagram.com/p/DQPayD4jMSw/'},
 korean:{sourceFile:'food/post_6_carousel_1.jpg',instagramUrl:'https://www.instagram.com/p/DeEQX2jDsU5/'},
 matcha:{sourceFile:'food/post_17_DYw8PC5M2be_main.jpg',instagramUrl:'https://www.instagram.com/p/DYw8PC5M2be/'},
 table:{sourceFile:'food/post_2_carousel_2.jpg',instagramUrl:'https://www.instagram.com/p/DdMfTBSDTo0/'},
 cafe:{sourceFile:'food/post_8_DeCDnbTCxvw_main.jpg',instagramUrl:'https://www.instagram.com/p/DeCDnbTCxvw/'},
 friends:{sourceFile:'food/post_0_carousel_1.jpg',instagramUrl:'https://www.instagram.com/p/DdO4FJTDLBE/'},
 date:{sourceFile:'food/post_9_Debz-5WocUG_main.jpg',instagramUrl:'https://www.instagram.com/p/Debz-5WocUG/'},
 storefront:{sourceFile:'gallery/post_19_DdQTo9DtGsI_main.jpg',instagramUrl:'https://www.instagram.com/p/DdQTo9DtGsI/'},
 opening:{sourceFile:'gallery/post_5_DdRDMJrhfH4_main.jpg',instagramUrl:'https://www.instagram.com/p/DdRDMJrhfH4/'},
 together:{sourceFile:'food/post_0_carousel_3.jpg',instagramUrl:'https://www.instagram.com/p/DdO4FJTDLBE/'}
};
export const photoDimensions:Record<string,[number,number]>={momos:[720,1280],korean:[1254,1254],matcha:[720,1280],table:[1440,1920],cafe:[720,1280],friends:[2028,2700],date:[720,1280],storefront:[640,1136],opening:[1215,2160],together:[2028,2700]};
export const brand={name:'Momos & Stuff',logo:'/assets/brand/logo.jpg',instagram:'https://www.instagram.com/momosandstuff_/',address:'Gunjan Road, Khau Gali, Vapi, Gujarat, India',additionalLocation:'Silvassa',story:'From Sikkim to Silvassa. Now, Sikkim to Vapi!',storySource:'https://www.instagram.com/p/DcbalGGsUu8/'};
export const photos:Photo[]=[
 {id:'momos',alt:'Blue patterned plates of steamed momos, dipping sauce and a bowl of sauced food',label:'Sauce + steam = happiness'},
 {id:'korean',alt:'Korean spicy momos on a blue patterned plate with sesame and a white dip',label:'A little kick, a lot of comfort'},
 {id:'matcha',alt:'A pale drink with a blue flower arrangement on a sunny café table',label:'A slower kind of afternoon'},
 {id:'table',alt:'Momos, dipping sauce and fries on a white café table',label:'A table worth gathering around'},
 {id:'cafe',alt:'Plants and a phone on a white table in the blue café interior',label:'Your cozy little corner'},
 {id:'friends',alt:'Friends sharing food at a table in the café',label:'Good food. Better company.'},
 {id:'date',alt:'A café visitor holding a drink with momos and more drinks on the table',label:'Little café dates'},
 {id:'storefront',alt:'The illuminated blue Momos & Stuff sign outside the café at night',label:'Follow the little blue cloud'},
 {id:'opening',alt:'A child holding a Momos & Stuff booklet at the opening celebration',label:'Moments from opening day'},
 {id:'together',alt:'Two café guests seated beneath the blue wave mural',label:'Room for your favorite people'},
].map(p=>({...p,...photoOrigins[p.id]}));
export const photo=(id:string)=>photos.find(p=>p.id===id)!;
export type Dish={name:string;description:string;source:string;price?:string};
export type Category={title:string;subtitle:string;photo:string;items:Dish[]};
export const categories:Category[]=[
 {title:'Momos',subtitle:'Little parcels. Big personality.',photo:'korean',items:[
  {name:'Korean Spicy Momo',description:'Crispy, tangy and spicy. Korean-inspired sauce, finished with sesame.',source:'https://www.instagram.com/p/DeEQX2jDsU5/'},
  {name:'Paneer Jhol Momos',description:'For the next chapter of your momo cravings.',source:'https://www.instagram.com/p/Debz-5WocUG/'}]},
 {title:'Something to sip',subtitle:'Make a little time for yourself.',photo:'matcha',items:[
  {name:'BlueTea Matcha',description:'A little color for your café break.',source:'https://www.instagram.com/p/DYw8PC5M2be/'},
  {name:'Ube Latte',description:'A café-date discovery from our Instagram.',source:'https://www.instagram.com/p/Debz-5WocUG/'}]},
 {title:'The sweet chapter',subtitle:'Save a little room for joy.',photo:'date',items:[
  {name:'Chocolate Strawberry',description:'Introduced in our Christmas collection. Ask us about current availability.',source:'https://www.instagram.com/p/DShqh29jBhH/'}]},
];
export const featured=[{photo:'momos',title:'Sauce meets steam',tag:'LITTLE PARCELS',description:'A little comfort, one bite at a time.'},{photo:'korean',title:'Korean Spicy Momo',tag:'A LITTLE HEAT',description:'Crispy. Tangy. Spicy. Full of flavour.'},{photo:'matcha',title:'Something to sip',tag:'SLOW LITTLE MOMENTS',description:'Take a seat. Stay a little longer.'}];
