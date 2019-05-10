package com.weiziplus.springboot.common.utils;

import org.springframework.util.DigestUtils;

import java.io.UnsupportedEncodingException;

/**
 * MD5加密
 *
 * @author wanglongwei
 * @data 2019/5/7 10:15
 */
public class Md5Util {
    /**
     * MD5加密盐
     */
    private static final String SALT = "WeiziPlus";

    /**
     * MD5加密  32位小写
     *
     * @param str
     * @return
     */
    public static String encode(String str) throws UnsupportedEncodingException {
        //在字符串基础上添加加密盐
        str = SALT + str;
        return DigestUtils.md5DigestAsHex(str.getBytes("GBK"));
    }

    /**
     * 任意类型 MD5加密
     *
     * @param object
     * @return
     */
    public static String encode(Object object) throws UnsupportedEncodingException {
        return encode(object.toString());
    }
}
