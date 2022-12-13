'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// api prefix
const api = 'api/v1'

// accepted extesions
const exts = ['json', 'table', 'tablejson', 'jsontable']

// Tanpa Cache
Route.group(() => {

  Route.post('/user/confirm', 'AuthController.confirm')
  Route.post('/user/login', 'UserController.login')
  Route.post('/user/refresh', 'AuthController.refresh')
  Route.post('/user/logout', 'UserController.logout')

  Route.get('/kelas','HomeController.looping')
}).prefix(api).formats(exts)

//  Cache
Route.group(() => {
  // Route.get('/device-management/get-device-setting', 'DeviceManagementController.getDeviceSetting')
}).prefix(api).formats(exts)
  .middleware([
    'auth:jwt',
    'cache',
    'orgs'
  ])

// menampilkan halaman home
Route.get('/','HomeController.show')
Route.get('/home','HomeController.show')
// menampilkan halaman about us
Route.get('/about','AboutController.show')
// menampilkan halaman contact us
Route.get('/contact/:modal?','ContactController.show')


Route.group(() => {
  // memanggil fungsi get started
  Route.post('contact/get-started/insert','ContactController.insertGetStarted'); 
  // memanggil fungsi get quote
  Route.post('contact/get-quote/insert','ContactController.insertGetQuote'); 
  // memanggil fungsi get in touch
  Route.post('contact/get-in-touch/insert','ContactController.insertGetInTouch'); 
}).formats(exts)


// Route.post('/contact','ContactController.insert')
// Route.put('/contact/:id','ContactController.update')
// Route.delete('/contact/:id','ContactController.delete')

Route.group(() => {
  Route.get('/kelas','HomeController.looping')
}).formats(['json'])

Route.any('*', ({view}) => view.render('404'))



