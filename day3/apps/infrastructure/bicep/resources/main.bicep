@minLength(5)
@maxLength(8)
@description('Name of environment')
param env string = 'devd3'

var resourceTag = {
  Environment: env
  Application: 'SCM'
  Component: 'SCM-Resources'
}

module storage 'storage.bicep' = {
  name: 'deployStorageResources'
  params: {
    env: env
    resourceTag: resourceTag
  }
}

module webapp 'webapp.bicep' = {
  name: 'deployWebAppResources'
  params: {
    env: env
    resourceTag: resourceTag
    storageConnectionString: storage.outputs.storageConnectionString
  }
}

module function 'function.bicep' = {
  name: 'deployFunctionResources'
  params: {
    env: env
    resourceTag: resourceTag
    storageConnectionString: storage.outputs.storageConnectionString
  }
}
