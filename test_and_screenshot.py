import asyncio
import os
from playwright.async_api import async_playwright

async def run_tests():
    os.makedirs(r'f:\Nova pasta\site\lounigeek\assets\screenshots', exist_ok=True)
    chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            executable_path=chrome_path,
            headless=True,
            args=['--no-sandbox', '--disable-setuid-sandbox']
        )
        
        # Teste 1: Desktop Viewport
        page = await browser.new_page(viewport={"width": 1440, "height": 900})
        
        errors = []
        page.on("pageerror", lambda err: errors.append(str(err)))
        page.on("console", lambda msg: print(f"Browser Log: {msg.type}: {msg.text}") if msg.type == 'error' else None)
        
        url = 'file:///' + os.path.abspath(r'f:\Nova pasta\site\lounigeek\index.html').replace('\\', '/')
        print(f"Navegando para: {url}")
        await page.goto(url, wait_until='load')
        
        await page.wait_for_timeout(1500)
        
        # Scroll desktop down and up to trigger all renders
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await page.wait_for_timeout(800)
        await page.evaluate("window.scrollTo(0, 0)")
        await page.wait_for_timeout(500)
        
        # Screenshot Desktop Full Page
        desktop_shot = r'f:\Nova pasta\site\lounigeek\assets\screenshots\lounigeek-desktop-full.png'
        await page.screenshot(path=desktop_shot, full_page=True)
        print(f"Screenshot Desktop salvo: {desktop_shot}")
        
        # Testar Adicionar ao Carrinho
        add_btn = page.locator('.product-add-btn').first
        await add_btn.click()
        await page.wait_for_timeout(600)
        
        # Abrir Carrinho
        cart_btn = page.locator('#openCartBtn')
        await cart_btn.click()
        await page.wait_for_timeout(800)
        
        cart_shot = r'f:\Nova pasta\site\lounigeek\assets\screenshots\lounigeek-cart-open.png'
        await page.screenshot(path=cart_shot)
        print(f"Screenshot Carrinho aberto salvo: {cart_shot}")
        
        # Fechar carrinho
        close_cart = page.locator('#closeCartBtn')
        await close_cart.click()
        await page.wait_for_timeout(400)

        # Teste 2: Mobile Viewport (iPhone 14)
        mobile_page = await browser.new_page(viewport={"width": 390, "height": 844})
        await mobile_page.goto(url, wait_until='load')
        await mobile_page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await mobile_page.wait_for_timeout(800)
        await mobile_page.evaluate("window.scrollTo(0, 0)")
        await mobile_page.wait_for_timeout(600)
        
        mobile_shot = r'f:\Nova pasta\site\lounigeek\assets\screenshots\lounigeek-mobile-full.png'
        await mobile_page.screenshot(path=mobile_shot, full_page=True)
        print(f"Screenshot Mobile salvo: {mobile_shot}")
        
        await browser.close()
        
        if errors:
            print("Erros de página encontrados:", errors)
        else:
            print("SUCESSO ABSOLUTO: Todos os testes passaram sem nenhum erro!")

if __name__ == '__main__':
    asyncio.run(run_tests())

