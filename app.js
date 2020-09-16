var SwaggerUi = require("swagger-tools/middleware/swagger-ui")

SwaggerExpress.create(config, function (err, swaggerExpress) {
  // add swagger-ui (/docs)
  app.use(SwaggerUi(swaggerExpress.runner.swagger))

  // install middleware
  swaggerExpress.register(app)
})