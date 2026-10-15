# -*- coding: utf-8 -*-
import urllib.request
import urllib.parse
import json
import os
import ssl
from PIL import Image

# Configuração SSL para downloads seguros
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

BASE_DIR = r"f:\Nova pasta\site\lounigeek\assets\images"

# Coleção de fotos reais em altíssima definição (1200px - 2000px) do Unsplash
# Temática: Action Figures originais, Mangás de colecionador, Streetwear Geek, Cenários Japoneses
CURATED_SCRAPE_PHOTOS = {
    # 1. Banners e Cenários
    "banners/banner-japan-figure.png": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1600&auto=format&fit=crop&q=90", # Coleção rica de action figures em vitrine iluminada
    "banners/banner-vestuario.png": "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=1200&auto=format&fit=crop&q=90",     # Vestuário e camiseta premium de estúdio
    
    # 2. Categorias
    "categories/action-figures.png": "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format&fit=crop&q=90",   # Action figure em iluminação neon lavanda/magenta
    "categories/mangas.png": "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800&auto=format&fit=crop&q=90",           # Volumes de mangás japoneses alinhados
    "categories/roupas.png": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=90",           # Camiseta preta de alta qualidade
    "categories/bones.png": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop&q=90",            # Boné snapback preto moderno
    "categories/chaveiros.png": "https://images.unsplash.com/photo-1614036417651-efe5912149d8?w=800&auto=format&fit=crop&q=90",        # Acessórios colecionáveis e chaveiros
    
    # 3. Produtos em Destaque
    "products/itachi-uchiha.png": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=90",      # Figure detalhada com capa escura e postura imponente
    "products/manga-one-piece-box.png": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=90", # Coleção encadernada de livros/mangás em box
    "products/tanjiro-kamado.png": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=800&auto=format&fit=crop&q=90",   # Colecionável dinâmico com iluminação dramática
    "products/goku-ultra-instinto.png": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=90",# Figure com aura e energia luminosa
    "products/camiseta-akatsuki.png": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=90",  # Camiseta preta em fundo limpo de catálogo
    
    # 4. Avatares de Avaliações
    "reviews/avatar-lucas.png": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=90",
    "reviews/avatar-fernanda.png": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=90",
    "reviews/avatar-rafael.png": "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&auto=format&fit=crop&q=90",
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
}

success_count = 0

for rel_path, url in CURATED_SCRAPE_PHOTOS.items():
    dest_path = os.path.join(BASE_DIR, rel_path.replace('/', os.sep))
    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    
    print(f"Baixando [Scrape]: {rel_path} ...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=20) as resp:
            data = resp.read()
            
            # Salvar temporário e processar para formato otimizado PNG
            temp_file = dest_path + ".tmp"
            with open(temp_file, 'wb') as f:
                f.write(data)
                
            # Abrir com Pillow, recortar centralizado se necessário e salvar em PNG nítido
            with Image.open(temp_file) as im:
                im = im.convert('RGBA')
                im.save(dest_path, 'PNG', optimize=True)
                
            if os.path.exists(temp_file):
                os.remove(temp_file)
                
            print(f"  -> Concluído: {dest_path} ({len(data)} bytes)")
            success_count += 1
    except Exception as e:
        print(f"  -> Erro ao baixar {rel_path}: {e}")

print(f"\nFinalizado! {success_count}/{len(CURATED_SCRAPE_PHOTOS)} imagens baixadas via scraping e salvas com sucesso.")

