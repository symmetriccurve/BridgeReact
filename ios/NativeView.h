//
//  NativeView.h
//  ReactObj
//
//  Created by Belde, Vikram on 10/25/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTViewManager.h"
#import "RCTBridgeModule.h"
@interface NativeView : RCTViewManager<RCTBridgeModule>

@property(nonatomic,retain) UIView * mainView;
@property(nonatomic,retain) UILabel * firstLable;
@property(nonatomic,retain) UILabel * secondLable;

@end
