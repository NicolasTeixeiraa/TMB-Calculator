using HealthCalculatorAPI.Data;
using HealthCalculatorAPI.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Configuração do DbContext
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Registro de serviços existentes
builder.Services.AddScoped<TMBService>();
builder.Services.AddScoped<zIMCService>(); // Para crianças/adolescentes
builder.Services.AddScoped<IMCService>();  // Para adultos
builder.Services.AddScoped<RCAService>();

// Registro do novo serviço de creatina
builder.Services.AddScoped<CreatineService>();

builder.Services.AddControllers();

// Configuração do Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configuração do CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Aplicando a política de CORS
app.UseCors("AllowAll");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();