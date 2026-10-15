import asyncio
import os
from playwright.async_api import async_playwright

async def test_crm():
    os.makedirs(r'f:\Nova pasta\site\lounigeek\assets\screenshots', exist_ok=True)
    chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            executable_path=chrome_path,
            headless=True,
            args=['--no-sandbox', '--disable-setuid-sandbox']
        )
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        
        errors = []
        page.on('pageerror', lambda err: errors.append(str(err)))
        page.on('console', lambda msg: print(f'Console [{msg.type}]: {msg.text}') if msg.type in ['error', 'warning'] else None)
        
        crm_url = 'file:///' + os.path.abspath(r'f:\Nova pasta\site\lounigeek\crm\index.html').replace('\\', '/')
        print('Navegando para CRM:', crm_url)
        await page.goto(crm_url, wait_until='load')
        await page.wait_for_timeout(1500)
        
        # Screenshot Dashboard com Gráficos
        shot_dash = r'f:\Nova pasta\site\lounigeek\assets\screenshots\crm-dashboard.png'
        await page.screenshot(path=shot_dash, full_page=True)
        print('Dashboard salvo:', shot_dash)
        
        # Testar Aba de Pedidos
        await page.click('#tab-btn-pedidos')
        await page.wait_for_timeout(600)
        shot_pedidos = r'f:\Nova pasta\site\lounigeek\assets\screenshots\crm-pedidos.png'
        await page.screenshot(path=shot_pedidos, full_page=True)
        print('Pedidos salvos:', shot_pedidos)
        
        # Testar Aba de Estoque
        await page.click('#tab-btn-estoque')
        await page.wait_for_timeout(600)
        shot_estoque = r'f:\Nova pasta\site\lounigeek\assets\screenshots\crm-estoque.png'
        await page.screenshot(path=shot_estoque, full_page=True)
        print('Estoque salvo:', shot_estoque)
        
        # Testar Aba de Margem
        await page.click('#tab-btn-lucro')
        await page.wait_for_timeout(600)
        shot_lucro = r'f:\Nova pasta\site\lounigeek\assets\screenshots\crm-margens.png'
        await page.screenshot(path=shot_lucro, full_page=True)
        print('Margens salvas:', shot_lucro)

        await browser.close()
        
        if errors:
            print('Erros encontrados:', errors)
        else:
            print('SUCESSO TOTAL: CRM Lounigeek testado e screenshots capturados com perfeição!')

if __name__ == '__main__':
    asyncio.run(test_crm())

