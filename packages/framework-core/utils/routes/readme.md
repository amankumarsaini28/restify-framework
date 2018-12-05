# Route Utils

## constructRoutes

```
function constructRoutes(server)
```

constructRoutes function takes instance of `restify.CreateServer({/**Args**/})` as argument and rerturns a closure function `mapUrlWithController(applicationRoutes, baseUrl)` to map routes definition object with controller and restify server.

### applicationRoutes
```
  [
    {
      path: 'string',
      mehod: HttpMethods.<METHOD>,
      controller: function(req,res,next ){ },
      children: [
        /*
        ** route definition
        */
      ]
    }
  ]
```
### baseUrl
string that will serve as base path for route mapping for applicationRoutes route definition.

e.g.

if routeDefinition is
```
{
  path: 'profile',
  mehod: HttpMethods.GET,
  controller: function(req,res,next ){ },
}
```
and baseUrl is
```
  '/api/v1';
```
route will be exposed as 
```
  '/api/v1/profile'
```
