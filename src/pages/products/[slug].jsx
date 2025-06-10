import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import { fetchProductBySlug } from "../../utils/api";
import { useCart } from "../../context/CartContext";

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    if (!slug) return;

    async function loadProduct() {
      try {
        const productData = await fetchProductBySlug(slug);
        setProduct(productData);
      } catch (err) {
        setError(err.message || "Failed to load product");
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [slug]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      slug: product.slug,
    });
  };

  if (loading) {
    return (
      <div className="loading-page">
        <Header />
        <div className="container">Loading product details...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="error-page">
        <Header />
        <div className="container">
          <h1>Product Not Found</h1>
          <p>{error || "The requested product could not be found."}</p>
          <Link href="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{product.name} | Sweet House</title>
        <meta
          name="description"
          content={product.metaDescription || product.shortDescription}
        />
      </Head>

      <Header />

      <main className="product-detail-page">
        <div className="product-container">
          <div className="product-gallery">
            <div className="main-image">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                width={600}
                height={600}
                priority
              />
            </div>
            <div className="thumbnail-grid">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${
                    index === selectedImage ? "active" : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - ${index + 1}`}
                    width={100}
                    height={100}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="product-info">
            <h1>{product.name}</h1>
            <div className="product-meta">
              <span className="price">₹{product.price.toFixed(2)}</span>
              {product.rating && (
                <span className="rating">
                  {product.rating} ★ ({product.reviewCount} reviews)
                </span>
              )}
            </div>

            <div className="product-description">
              <p>{product.shortDescription}</p>
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>

            {product.ingredients && (
              <div className="product-ingredients">
                <h3>Ingredients</h3>
                <ul>
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="product-actions">
              <div className="quantity-selector">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>
              <button
                className="btn-primary add-to-cart"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>

            <div className="product-details">
              {product.weight && (
                <p>
                  <strong>Weight:</strong> {product.weight}g
                </p>
              )}
              {product.shelfLife && (
                <p>
                  <strong>Shelf Life:</strong> {product.shelfLife}
                </p>
              )}
              {product.allergyInfo && (
                <p>
                  <strong>Allergy Information:</strong> {product.allergyInfo}
                </p>
              )}
            </div>
          </div>
        </div>

        {product.relatedProducts && product.relatedProducts.length > 0 && (
          <section className="related-products">
            <h2>You May Also Like</h2>
            <div className="products-grid">
              {product.relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
