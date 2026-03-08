# 使用官方Nginx镜像
FROM nginx:alpine

# 复制构建好的静态文件到Nginx默认目录
COPY dist /usr/share/nginx/html

# 暴露80端口
EXPOSE 80

# 启动Nginx
CMD ["nginx", "-g", "daemon off;"]