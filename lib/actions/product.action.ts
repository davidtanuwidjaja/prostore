'use server';
import { prisma } from '@/db/prisma';
import { convertToPlainObject } from '../utils';
import { LATEST_PRODUCTS_LIMIT } from '../constants';

// get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany(
    {
      take: LATEST_PRODUCTS_LIMIT,
      orderBy: { createdAt: 'desc' },
    }
  )

  return convertToPlainObject(data);
}

// get product by slug
export async function getProductBySlug(slug: string) {
  const data = await prisma.product.findFirst({
    where: { slug },
  })

  return convertToPlainObject(data);
}