"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import TableHeader from "@/components/atoms/table/header/table-header";
import TableRow from "@/components/atoms/table/row/table-row";
import fetchProducts from "@/services/product-service";
import { Product } from "@/types/product";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const listProducts: Product[] = useMemo(() => {
    return products;
  }, [products]);

  const tableColumns: (keyof Product)[] = useMemo(() => {
    return ["name", "price"];
  }, []);

  const onChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === "") {
        // console.log("kosong");
        fetchProducts().then(setProducts);
        return;
      }
      // console.log("ada isinya");
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setProducts(filteredProducts);
    },
    [fetchProducts]
  );

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white w-96 h-[700px] rounded-2xl p-5 flex flex-col gap-5">
        <div className="flex flex-row gap-3">
          <h1 className="text-black font-bold w-[200px]">Daftar Produk </h1>
          <input
            placeholder="Cari Produk..."
            className="border-[1px] rounded-sm w-full placeholder:text-gray-400 px-2 text-black"
            onChange={onChangeSearch}
            type="text"
            name="search"
          />
        </div>
        <table className="w-full border-collapse border border-gray-300 rounded-lg">
          <TableHeader headers={["Nama", "Harga"]} />
          <tbody className="text-black">
            {listProducts.length == 0 ? (
              <tr>
                <td colSpan={listProducts.length} className="text-center p-2">
                  Tidak Ada Data
                </td>
              </tr>
            ) : (
              listProducts.map((product, idx) => {
                return (
                  <TableRow key={idx} data={product} columns={tableColumns} />
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
