# PROMPTS
Gemini CLI, Modelo: Gemini 2.5

## Primer Prompt:
"""
Eres un experto en pruebas e2e de software con amplia experiencia en la creación de casos de prueba detallados y efectivos. Tu tarea es ayudar a generar casos de prueba e2e completos para aplicaciones web y móviles, asegurando que todas las funcionalidades críticas sean cubiertas.
Ayudame a implementar las siguientes a tareas que me han solicitado:

1) Preparación del entorno
- Integra Playwright en el proyecto (dependencias + instalación de navegadores).
- Configura el runner y el baseURL para apuntar al entorno correcto.
- Añade scripts en package.json para ejecutar las pruebas y generar/abrir reportes.

2) Estructura de tests
- Crea la carpeta de pruebas E2E (por ejemplo: tests/e2e/).
- Organiza las pruebas por flujos (no por componentes).
- Usa nombres claros para los archivos (login.spec.ts, core-flow.spec.ts, etc.).

3) Escenarios E2E (mínimo 2)
- Implementa al menos dos escenarios completos (happy path) relevantes para la aplicación.
- Cada escenario debe incluir:
 - Navegación al punto inicial del flujo.
 - Interacciones reales del usuario (clicks, inputs, selects).

 - Validaciones con expect(...) sobre elementos/estado visible.

 - Evitar esperas manuales “a ciegas”; preferir condiciones observables.

4) Buenas prácticas mínimas
- Usa selectores estables (ideal: data-testid, roles accesibles, texto visible).
- Reutiliza lógica repetida con helpers y/o Page Objects cuando mejore la claridad.
- Mantén pruebas reproducibles (estado controlado, datos consistentes, independencia entre tests).

Genera el código necesario para implementar estas tareas en un proyecto de ejemplo.
"""


## Segundo Prompt:
Githup copilot desde VScode, Modelo: Grok Code Fast 1
"""
  Ayudame a resolver estos errores, para que pasen las pruebas e2e. Ya tengo los servidores arriba, backend en el puerto 3010, y frontend en el puerto
  3000, ambos en localhost, Es importante que evites la shell interactiva cuando lances las pruebas e2e ya que si haces eso se queda colgado y tendre que cancelar y no podras leer eloutput.

  Además, quiero que saques screenshots y videos de los test

  6 failed
  │
  │     [chromium] › tests\e2e\create-candidate.spec.ts:4:7 › Create Candidate Flow › should allow a recruiter to create a new candidate
  │
  │     [chromium] › tests\e2e\filter-positions.spec.ts:6:7 › Filter Positions Flow › should allow a recruiter to filter positions by title
  │
  │
  │
  │     [firefox] › tests\e2e\create-candidate.spec.ts:4:7 › Create Candidate Flow › should allow a recruiter to create a new candidate
  │
  │     [firefox] › tests\e2e\filter-positions.spec.ts:6:7 › Filter Positions Flow › should allow a recruiter to filter positions by title
  │
  │     [webkit] › tests\e2e\create-candidate.spec.ts:4:7 › Create Candidate Flow › should allow a recruiter to create a new candidate
  │
  │     [webkit] › tests\e2e\filter-positions.spec.ts:6:7 › Filter Positions Flow › should allow a recruiter to filter positions by title
"""