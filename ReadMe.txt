

VS Code Extensões:
	- Color Highlight, 
	- Prettier, 
	- ES7 React/Redux/GraphQL snippets ---reafce (cria automático)

JavaScript:
	- Arrow Function
	- Destructuring
	- Rest e Spread
	
React:

1. Componentes
	- Quando utilizar:
		* Quando é utilizado em mais de um lugar
		* Para quebrar o código em partes (assim como quebramos funções no backend)
		* Para organizar o código!
2. Hooks
	.useState
	- Quando utilizar:
		* Para sincronizar um estado (ex. um contador)
	- Como utilizar:
		* Precisa ser setado dentro de um evento, pois sempre renderiza os componentes que o utilizaram
	- O que ele é?
		* é um array com o get e o set do valor 
		* const [valor, setValor] = React.useState(10);
	- O valor reage ao set, isso que faz o React ter reatividade para renderizar novamente!
	
	.useEffect
	- Quando utilizar:
		* Para definir um callback que será executado durante certos momentos do ciclo de vida do componente
	- Como utilizar:
		* O array de parametro define quando fazer o callback, o array vazio quer dizer que deve fazer só na primeira renderização do código
		* O warning ocorre apenas para avisar que aquele estado não está definido como dependencia do callback
		* dá pra retornar um callback com uma função
	
	.useRef
	- Quando utilizar:
		* Para referenciar um elemento
		* É mais utilizado em formulários, por exemplo para dar foco em algum input após um enviar num chat ou para lidar com timeout de alguma notificação
	
	.useMemo
	
	.useCallback
	- Quando utilizar:
		* Para evitar ficar refazendo funções, mas o React sempre limpa a memoria, então não deve ser tão útil :)
	
	.createContext
	- Quando utilizar:
		* Serve principalmente para dados/estados globais
	
	Custom Hooks
	- Para evitar repetição de código
	
3. package.json scripts
	É possível configurar scripts para chamar no terminal sem ter que escrever tudo
	
4. Style
	Passar style por constante
	
5. Arrays
	- Toda lista precisa ter um key para o React se achar

6. Propriedades (props)
	- recebe o que for passado no html
	
7. Strict Mode renderiza 2 vezes em localhost