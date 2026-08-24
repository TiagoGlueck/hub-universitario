## BUG01 e BUG02 (Tiago) 

### ferramentas e modelos utilizados: 
Claude Code - Opus 5
### em quais etapas a IA foi utilizada: 
Melhor entendimento de como o bug interferia no sistema e formatação das issues
### resumo dos principais prompts ou objetivos solicitados:
Com o objetivo de entender melhor como o sistema funciona e como o bug interagia com o sistema, usei IA para que me explicasse como os métodos da classe testavam e onde testavam para facilitar meu aprendizado do código denso e de difícil entendimento.
	Com as issues, eu mesmo juntei tudo o que sabia sobre o problema (onde estava ocorrendo o bug, a solução e como testar se foi corrigido) e pedi para a IA formatar para ficar mais claro, direto e profissional.
### arquivos ou partes da solução influenciados:
Issues criadas e nos métodos dentro do arquivo 'ActivityControllerTest.java' dentro de 'hub-universitario\apps\backend\src\test\java\br\edu\hub'
### como o participante revisou e validou o resultado:
Entendendo melhor os testes, eu fiz o caminho contrário até encontrar possíveis falhas nos métodos. 


---
## BUG03 e BUG04 (Fernando) 

### ferramentas e modelos utilizados:
Claude Sonnet no navegador
### em quais etapas a IA foi utilizada: 
  Foi usada para tradução de pseudocódigo em código real e para pesquisa do significado de diferentes códigos de erro
### resumo dos principais prompts ou objetivos solicitados:
Usei no Bug03 para entender melhor os resultados dos testes (especialmente os códigos de erro) e no Bug04 para traduzir pseudocódigo para código typescript e identificar erros na função em typescript `apps/frontend/src/hooks/useActivities.ts`.
### arquivos ou partes da solução influenciados:
`apps/frontend/src/hooks/useActivities.ts` teve código a função `onSucess` gerada por IA em que eu implementei.
	
### como o participante revisou e validou o resultado:
 Não implementei sem antes entender, pela leitura dos nomes das funções e de sua estrutura, como o código funcionava em cada etapa em que foi necessário revisar, corrigir e testar. Como os nomes das funções são extremamente conectados a suas funções e objetivos, e como a estrutura do código remete estruturas previamente vistas por mim, foi possível entender o objetivo e funcionamento do código e de cada parte sua simplesmente pela leitura, análise e interpretação.

---

## FEATURE 02 (Fernando) 

### ferramentas e modelos utilizados:
Claude Sonnet no navegador
### em quais etapas a IA foi utilizada: 
  Foi usada para gerar funções de typescript e react a partir de pseudocódigos que estruturei. No mais, foi usada também para desenvolver um template simples de css e html que usei como base para a formulação da página da feature (dashboard)
### resumo dos principais prompts ou objetivos solicitados:
Usei no Bug03 para entender melhor os resultados dos testes (especialmente os códigos de erro) e no Bug04 para traduzir pseudocódigo para código typescript e identificar erros na função em typescript `apps/frontend/src/hooks/useActivities.ts`.
### arquivos ou partes da solução influenciados:
`CategoryGraph.tsx`, `StatCard.tsx`, `TopList.tsx`, `DashboardPage.tsx`, `styles.css`, `dashStats.ts`	
### como o participante revisou e validou o resultado:
A grande maioria das partes geradas pelo modelo de IA foram usados simplesmente como base e inspiração para o código que foi verdadeiramente implementado. Portanto, nenhum código ou template gerado foi implementado diretamente e nenhum código que o contribuidor (eu, Fernando) não tivesse antes revisado e entendido a syntax e função do mesmo. Além do mais, grande quantidade de tempo foi gasta em testes, tanto pelos testes providenciados pelo README.md e pelo teste direto na UI do website.
