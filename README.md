# Cesta Certa — Edição de Natal

Página natalina independente adaptada da oferta https://fabricada-cestacerta.vercel.app/. Paleta verde profundo, vinho, dourado e marfim. Novo catálogo visual, prévias natalinas do aplicativo, três capas de bônus, simulador de faturamento e custos, planos e depoimentos da oferta original.

## Desenvolvimento

`npm run check` valida o JavaScript, as referências locais, os checkouts e os arquivos essenciais. `npm run dev` abre a página em http://127.0.0.1:4175/. Não há dependências de produção.

## Vercel

Importar **este repositório como um novo projeto**, usando a raiz. A configuração publica `dist`. Não alterar os projetos Vercel existentes. O domínio de produção será o atribuído ao novo projeto; a metatag de compartilhamento usa o caminho `/assets/hero-natal.webp` relativo à raiz.

## Oferta aprovada

- Essencial: R$27,00 — https://pay.wiapy.com/jo956lg2C0So
- Completo + Bônus: R$41,90 — https://pay.wiapy.com/6ac68690c7ae865f6ee08ea8
- Oferta do Completo ao escolher o básico: R$34,90 — https://pay.wiapy.com/_wAFKQWmeV8
- O pop-up revela um desconto fixo de R$7,00 com animação de roleta. Não há sorteio ou resultado aleatório. Fechar volta à página; recusar segue para o checkout do básico.
- Garantia de 7 dias, acesso vitalício e entrega digital pelo WhatsApp/e-mail após a confirmação.
- Kit Foto de Cesta, Calendário de Vendas 2026 e 30 Textos Prontos inclusos no Completo.
- Pixel UTMify (ID `69fe2f29778407a3ca9b106c`) e script de UTMs instalados uma vez no `<head>`, com os dois trechos fornecidos pelo proprietário. O pixel fica desativado em `localhost`, `127.0.0.1` e `[::1]`: o SDK do fornecedor direciona `localhost` e `127.0.0.1` a um servidor de desenvolvimento na porta 3001. Em domínios publicados, usa a API de produção. O script de UTMs também carrega na prévia local. Links de pagamento atualizados conforme aprovação. Parâmetros de campanha são preservados nos checkouts.

O simulador usa estimativas editáveis e distingue faturamento bruto de saldo após custos. A página não cria resultados de clientes nem novas promessas de entrega. Os depoimentos e suas fotos foram preservados da referência fornecida pelo proprietário.

As telas do carrossel são apresentações visuais dos recursos com o tema natalino. Este projeto é a página de vendas; não inclui nem modifica o aplicativo pago, seus dados ou backend. As cestas da galeria são novas inspirações visuais para a campanha, não produtos físicos enviados ao comprador.

## Imagens

10 imagens originais criadas individualmente com o gerador integrado: hero com app, seis cestas e três bônus. Prompts completos em `design/prompts.json`. Arquivos usados pela página em `dist/assets/`. Originais PNG preservados localmente em `design/originais/`, ignorados no Git para manter o repositório da página leve. WebP otimizado sem alterar a composição.

Os sites anteriores e seus repositórios permanecem separados.

## Avisos de compras reais

O componente está pronto e permanece oculto até receber compras confirmadas. Não há nomes ou vendas inventados. Configure `data-feed` no elemento `#purchase-toast` com um endpoint público HTTPS do seu backend (CORS habilitado), sem tokens ou dados privados na URL. Nunca exponha a API secreta do checkout no navegador.

Formato da resposta: uma lista JSON de registros com `id` (identificador público anonimizado), `firstName` (somente o primeiro nome), `lastInitial` (inicial opcional), `plan` (`completo` ou `essencial`), `status` (`paid`) e `paidAt` (data ISO com fuso). O backend deve incluir somente pagamentos confirmados autorizados para exibição, sem telefone, e-mail ou número do pedido. A página mostra apenas compras dos últimos 10 minutos, uma vez por sessão, com limite de um aviso a cada 30 segundos. Registros antigos, futuros ou inválidos são descartados. Sem feed configurado, nenhum aviso é mostrado nem requisição é feita.
