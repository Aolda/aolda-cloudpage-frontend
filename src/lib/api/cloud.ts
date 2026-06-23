import { fetchApi } from './client';
import type {
  BriefResponse,
  FaqListResponse,
  NoticeDetailResponse,
  NoticeListResponse,
  ProductDetailResponse,
  ProductListResponse,
  UseProjectResponse,
} from './types/cloud';

export async function getCloudBrief(): Promise<BriefResponse> {
  return fetchApi<BriefResponse>('/cloud/brief');
}

export async function getCloudUseProjects(): Promise<UseProjectResponse> {
  return fetchApi<UseProjectResponse>('/cloud/use_project');
}

export async function getCloudFaqList(): Promise<FaqListResponse> {
  return fetchApi<FaqListResponse>('/cloud/qna');
}

export async function getCloudNoticeList(): Promise<NoticeListResponse> {
  return fetchApi<NoticeListResponse>('/cloud/notice');
}

export async function getCloudNoticeDetail(
  noticeId: string,
): Promise<NoticeDetailResponse> {
  return fetchApi<NoticeDetailResponse>(`/cloud/notice/${noticeId}`);
}

export async function getCloudProductList(): Promise<ProductListResponse> {
  return fetchApi<ProductListResponse>('/cloud/product');
}

export async function getCloudProductDetail(
  productId: string,
): Promise<ProductDetailResponse> {
  return fetchApi<ProductDetailResponse>(`/cloud/product/${productId}`);
}
