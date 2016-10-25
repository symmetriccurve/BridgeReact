//
//  NativeView.m
//  ReactObj
//
//  Created by Belde, Vikram on 10/25/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "NativeView.h"

@implementation NativeView
RCT_EXPORT_MODULE()

- (UIView *)view {
//  UILabel * someLabel = [[UILabel alloc] init];
//  someLabel.text = @"SomeText";
  //self.mainView.frame = CGRectMake(0, 0, 100, 200);
//  someLabel.backgroundColor = [UIColor greenColor];
//  [self.mainView addSubview:someLabel];
  
  self.firstLable.frame = CGRectMake(0, 0, 100, 200);
  self.firstLable.backgroundColor = [UIColor greenColor];
  
  self.secondLable.frame = CGRectMake(100, 0, 100, 200);
  self.secondLable.backgroundColor = [UIColor blueColor];
  
  
  [self.mainView addSubview:_firstLable];
  [self.mainView addSubview:_secondLable];
  return self.mainView;
  
}

//RCT_EXPORT_METHOD(){
//  self.mainView = [[UIView alloc] init];
//  UILabel * someLabel = [[UILabel alloc] init];
//  someLabel.text = @"LabelText";
//  someLabel.frame = CGRectMake(0, 0, 100, 200);
//  someLabel.backgroundColor = [UIColor greenColor];
//  [self.mainView addSubview:someLabel];
//  return self.mainView;
//
//}


RCT_EXPORT_METHOD(setProps:(NSString *)firstProp location:(NSString *)secondProp)
{
  
  self.mainView = [[UIView alloc] init];
  self.firstLable = [[UILabel alloc] init];
  self.secondLable = [[UILabel alloc] init];
  
  self.secondLable.text = secondProp;
    self.firstLable.text = firstProp;

}


@end
